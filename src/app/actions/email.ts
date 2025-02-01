"use server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    // Ensure the API endpoint is correctly formed
    const apiEndpoint = "https://portfolio-zmdt.vercel.app/api/send-emails"; // Fallback for local development

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    // Check if the response is ok and is JSON
    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      let errorMessage = "Failed to send email";

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        // Handle non-JSON responses (like an HTML error page)
        const errorText = await response.text();
        errorMessage = errorText || errorMessage;
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();
    return { success: true, message: data.message };
  } catch (error) {
    console.error("Error sending email: ", error);

    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email. Please try again later.",
    };
  }
}
