package com.kisannexus.authentication.otp;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
class OtpControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @BeforeEach
    void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
    }

    @Test
    void shouldSendOtp() throws Exception {
        String json = """
                {
                    "destination": "9876543210",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/send")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(content().string(not(containsString("123456"))));
    }

    @Test
    void shouldVerifyCorrectOtp() throws Exception {
        // Send first
        String sendJson = """
                {
                    "destination": "9876543211",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/send")
                .contentType(MediaType.APPLICATION_JSON)
                .content(sendJson))
                .andExpect(status().isOk());

        // Verify
        String verifyJson = """
                {
                    "destination": "9876543211",
                    "otp": "123456",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/verify")
                .contentType(MediaType.APPLICATION_JSON)
                .content(verifyJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true));
    }

    @Test
    void shouldRejectWrongOtp() throws Exception {
        String json = """
                {
                    "destination": "9876543210",
                    "otp": "999999",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/verify")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false));
    }

    @Test
    void shouldResendOtp() throws Exception {
        String json = """
                {
                    "destination": "9876543210",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/resend")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true));
    }

    @Test
    void shouldRejectInvalidOtpFormat() throws Exception {
        String json = """
                {
                    "destination": "9876543210",
                    "otp": "123",
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/verify")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldRejectMissingDestination() throws Exception {
        String json = """
                {
                    "purpose": "MOBILE_REGISTRATION"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/send")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldRejectMissingPurpose() throws Exception {
        String json = """
                {
                    "destination": "9876543210"
                }
                """;

        mockMvc.perform(post("/api/auth/otp/send")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isBadRequest());
    }

    @Test
    void shouldRejectInvalidPurpose() throws Exception {
        String json = "{\"destination\":\"9876543210\",\"purpose\":\"INVALID\"}";

        mockMvc.perform(post("/api/auth/otp/send")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isBadRequest());
    }
}
