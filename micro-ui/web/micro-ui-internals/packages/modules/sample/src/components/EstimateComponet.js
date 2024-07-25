import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, LabelFieldPair, TextInput, Dropdown, CheckBox } from "@egovernments/digit-ui-react-components";

const EstimateComponent = ({ onSelect, ...props }) => {
  const { t } = useTranslation();

  // Options for dropdown fields (example options, adjust as needed)
  const categoryOptions = [
    { code: "CAT1", name: "Category 1" },
    { code: "CAT2", name: "Category 2" },
    { code: "CAT3", name: "Category 3" },
  ];
  const uomOptions = [
    { code: "METER", name: "Meter" },
    { code: "KG", name: "Kilogram" },
    { code: "LITRE", name: "Litre" },
  ];

  // State for storing estimate data
  const [estimateData, setEstimateData] = useState({
    sorId: "",
    category: null,
    name: "",
    description: "",
    unitRate: "",
    numberOfUnits: "",
    uom: null,
    length: "",
    width: "",
    isActive: false,
  });

  // Function to update the field value
  const handleUpdateField = (field, value) => {
    setEstimateData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calling onSelect to update the value in form data
  useEffect(() => {
    onSelect("estimateDetails", estimateData);
  }, [estimateData]);

  return (
    <div style={{ backgroundColor: "#eee", border: "1px solid #d6d5d4", padding: "1.5rem", marginBottom: "1.5rem" }}>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("SOR ID*")}</span>
        </div>
        <TextInput
          name="sorId"
          value={estimateData.sorId}
          onChange={(event) => handleUpdateField("sorId", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Category*")}</span>
        </div>
        <Dropdown
          style={{ width: "100%" }}
          t={t}
          option={categoryOptions}
          optionKey={"name"}
          selected={categoryOptions.find(i => i.code === estimateData.category)}
          select={(value) => handleUpdateField("category", value.code)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Name*")}</span>
        </div>
        <TextInput
          name="name"
          value={estimateData.name}
          onChange={(event) => handleUpdateField("name", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Description*")}</span>
        </div>
        <TextInput
          name="description"
          value={estimateData.description}
          onChange={(event) => handleUpdateField("description", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Unit Rate*")}</span>
        </div>
        <TextInput
          name="unitRate"
          value={estimateData.unitRate}
          onChange={(event) => handleUpdateField("unitRate", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Number of Units*")}</span>
        </div>
        <TextInput
          name="numberOfUnits"
          value={estimateData.numberOfUnits}
          onChange={(event) => handleUpdateField("numberOfUnits", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("UOM*")}</span>
        </div>
        <Dropdown
          style={{ width: "100%" }}
          t={t}
          option={uomOptions}
          optionKey={"name"}
          selected={uomOptions.find(i => i.code === estimateData.uom)}
          select={(value) => handleUpdateField("uom", value.code)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Length*")}</span>
        </div>
        <TextInput
          name="length"
          value={estimateData.length}
          onChange={(event) => handleUpdateField("length", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Width*")}</span>
        </div>
        <TextInput
          name="width"
          value={estimateData.width}
          onChange={(event) => handleUpdateField("width", event.target.value)}
        />
      </LabelFieldPair>
      <LabelFieldPair>
        <div style={{ width: "30%" }}>
          <span>{t("Is Active*")}</span>
        </div>
        <CheckBox
          name="isActive"
          checked={estimateData.isActive}
          onChange={(event) => handleUpdateField("isActive", event.target.checked)}
        />
      </LabelFieldPair>
    </div>
  );
};

export default EstimateComponent;





















// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Button, LabelFieldPair, TextInput } from "@egovernments/digit-ui-react-components";

// const EstimateComponent = ({ onSelect, ...props }) => {
//   const { t } = useTranslation();

//   // State for storing address data
//   const [addressData, setAddressData] = useState({
//     tenantId: "",
//     latitude: "",
//     longitude: "",
//     city: ""
//   });

//   // Function to update the field value
//   const handleUpdateField = (field, value) => {
//     setAddressData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Calling onSelect to update the value in form data
//   useEffect(() => {
//     onSelect("address", addressData);
//   }, [addressData]);

//   return (
//     <div style={{ backgroundColor: "#eee", border: "1px solid #d6d5d4", padding: "1.5rem", marginBottom: "1.5rem" }}>
//       <LabelFieldPair>
//         <div style={{ width: "30%" }}>
//           <span>{t("Tenant ID*")}</span>
//         </div>
//         <TextInput
//           name="tenantId"
//           value={addressData.tenantId}
//           onChange={(event) => handleUpdateField("tenantId", event.target.value)}
//         />
//       </LabelFieldPair>
//       <LabelFieldPair>
//         <div style={{ width: "30%" }}>
//           <span>{t("Latitude*")}</span>
//         </div>
//         <TextInput
//           name="latitude"
//           value={addressData.latitude}
//           onChange={(event) => handleUpdateField("latitude", event.target.value)}
//         />
//       </LabelFieldPair>
//       <LabelFieldPair>
//         <div style={{ width: "30%" }}>
//           <span>{t("Longitude*")}</span>
//         </div>
//         <TextInput
//           name="longitude"
//           value={addressData.longitude}
//           onChange={(event) => handleUpdateField("longitude", event.target.value)}
//         />
//       </LabelFieldPair>
//       <LabelFieldPair>
//         <div style={{ width: "30%" }}>
//           <span>{t("City*")}</span>
//         </div>
//         <TextInput
//           name="city"
//           value={addressData.city}
//           onChange={(event) => handleUpdateField("city", event.target.value)}
//         />
//       </LabelFieldPair>
//     </div>
//   );
// };

// export default EstimateComponent;