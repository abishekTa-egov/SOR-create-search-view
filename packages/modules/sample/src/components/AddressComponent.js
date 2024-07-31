import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, LabelFieldPair, TextInput } from "@egovernments/digit-ui-react-components";

const AddressComponent = ({ onSelect, ...props }) => {
  const { t } = useTranslation();

  // State for storing address data
  const [addressData, setAddressData] = useState({
    tenantId: "",
    latitude: "",
    longitude: "",
    city: ""
  });

  // Function to update the field value
  const handleUpdateField = (field, value) => {
    setAddressData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Calling onSelect to update the value in form data
  useEffect(() => {
    onSelect("address", addressData);
  }, [addressData]);

  return (
    <div style={{ backgroundColor: "#eee", border: "1px solid #d6d5d4", padding: "1.5rem", marginBottom: "1.5rem" }}>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Tenant ID*")}</span>
        </div>
        <TextInput
          name="tenantId"
          value={addressData.tenantId}
          onChange={(event) => handleUpdateField("tenantId", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Latitude*")}</span>
        </div>
        <TextInput
          name="latitude"
          value={addressData.latitude}
          onChange={(event) => handleUpdateField("latitude", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Longitude*")}</span>
        </div>
        <TextInput
          name="longitude"
          value={addressData.longitude}
          onChange={(event) => handleUpdateField("longitude", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("City*")}</span>
        </div>
        <TextInput
          name="city"
          value={addressData.city}
          onChange={(event) => handleUpdateField("city", event.target.value)}
        />
      </LabelFieldPair>
    </div>
  );
};

export default AddressComponent;
