export async function register() {
  if (process.env.NODE_ENV === "development") {
    console.info(
      "\n\u279c  Deployed Frontend (Vercel) : https://kisan-nexus.vercel.app/",
    );
  }
}
