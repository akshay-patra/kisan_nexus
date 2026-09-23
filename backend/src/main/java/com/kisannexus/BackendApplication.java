package com.kisannexus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
		Environment env = context.getEnvironment();
		String port = env.getProperty("server.port", "8080");
		System.out.println("\n");
		System.out.println("\t\u001B[1mBackend is running at:\u001B[0m\n");
		System.out.println("\t\u001B[32m➜\u001B[0m  \u001B[1mLocal:\u001B[0m   \u001B[36mhttp://localhost:" + port + "\u001B[0m");
		System.out.println("\t\u001B[32m➜\u001B[0m  \u001B[1mDeploy:\u001B[0m  \u001B[90m<Not Deployed Yet>\u001B[0m");
		System.out.println("\n");
	}

}
