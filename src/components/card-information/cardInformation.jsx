import React, { useEffect, useState } from "react";
import CardInformationDisplay from "./CardInformationDisplay";
import { getCardData } from "@/services/card-info-api";

const CardInformation = () => {
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const data = await getCardData();
        setCardData(data);
      } catch (err) {
        setError("Failed to fetch card data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);

  if (loading) {
    return <div>Loading card information...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return <CardInformationDisplay cardData={cardData} />;
};

export default CardInformation;
