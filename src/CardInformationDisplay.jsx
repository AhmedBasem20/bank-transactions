import React from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import visaLogo from '/visa-logo.svg';
import { Button } from "@/components/ui/button";

const CardInformationDisplay = ({ cardData }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Card className="w-full max-w-md shadow-md p-4">
        <CardContent className="space-y-2">
          <div className="relative border-2 color-black p-4">
            <img src={visaLogo} alt="Visa" className="absolute top-0 right-4 h-20" />
            <div className="flex justify-between pt-20">
              <span className="text-xl font-medium">•••• •••• •••• {cardData.last4}</span>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <p className="text-sm text-gray-600">Cardholder</p>
                <p className="font-medium">{cardData.cardholderName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Expiry date</p>
                <p className="font-medium">
                  {String(cardData.expiryMonth).padStart(2, "0")}/{cardData.expiryYear.toString().slice(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">CVC</p>
                <p className="font-medium">•••</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-600">Card number</p>
            <p className="font-medium">•••• •••• •••• {cardData.last4}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-600">CVV</p>
            <p className="font-medium">•••</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-600">Expiration</p>
            <p className="font-medium">
              {String(cardData.expiryMonth).padStart(2, "0")}/{cardData.expiryYear}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm text-gray-600">Brand</p>
            <p className="font-medium">{cardData.brand}</p>
          </div>
          <div className="space-y-2 w-full max-w-md">
            <Button variant="outline" className="w-full">Freeze card</Button>
            <Button variant="outline" className="w-full">Replace card</Button>
            <Button variant="outline" className="w-full">Cancel card</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardInformationDisplay;
