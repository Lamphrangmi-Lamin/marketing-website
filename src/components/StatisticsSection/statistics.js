// Fetch data from API
export async function fetchStatistics() {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics",
    );

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
}