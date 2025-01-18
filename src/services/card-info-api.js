export const getCardData = async () => {
    try {
      const response = await fetch('https://www.bakarcompany.somee.com/api/IssueCard/get-card-data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch card data:", error);
      throw error;
    }
  };
