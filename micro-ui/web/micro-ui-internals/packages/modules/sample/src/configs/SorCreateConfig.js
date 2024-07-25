export const formConfig = [
  {
    head: "Create Estimate",
    body: [
      {
        inline: true,
        label: "Proposal Date",
        isMandatory: true,
        key: "proposalDate",
        type: "date",
        disable: false,
        populators: { name: "proposalDate", error: "Required" },
      },
      {
        inline: true,
        label: "Status",
        isMandatory: true,
        key: "status",
        type: "text",
        disable: false,
        populators: { name: "status", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Workflow Status",
        isMandatory: true,
        key: "wfStatus",
        type: "text",
        disable: false,
        populators: { name: "wfStatus", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Name",
        isMandatory: true,
        key: "name",
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Description",
        isMandatory: true,
        key: "description",
        type: "text",
        disable: false,
        populators: { name: "description", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        inline: true,
        label: "Executing Department",
        isMandatory: true,
        key: "executingDepartment",
        type: "text",
        disable: false,
        populators: { name: "executingDepartment", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    ],
  },
  {
    head: "Address",
    key: "address",
    body: [
      {
        isMandatory: false,
        key: "address",
        type: "component", // for custom component
        component: "AddressComponent", // name of the component as per component registry
        withoutLabel: true,
        disable: false,
        customProps: {},
        populators: {
          name: "address",
          required: true,
        },
      },
    ],
  },
  {
    head: "Estimate",
    key: "estimate",
    body: [
      {
        isMandatory: false,
        key: "estimate",
        type: "component", // for custom component
        component: "EstimateComponent", // name of the component as per component registry
        withoutLabel: true,
        disable: false,
        customProps: {},
        populators: {
          name: "estimate",
          required: true,
        },
      },
    ],
  },
  {
    head: "Additional Details",
    key: "additionalDetails",
    body: [
      {
        isMandatory: false,
        key: "additionalDetails",
        type: "component", // for custom component
        component: "SampleAdditionalComponent", // name of the component as per component registry
        withoutLabel: true,
        disable: false,
        customProps: {},
        populators: {
          name: "additionalDetails",
          required: true,
        },
      },
    ],
  },
];

  
  
  // {
  //   head: "Basic Information",
  //   body: [
  //     {
  //       inline: true,
  //       label: "Name",
  //       isMandatory: true,
  //       key: "name",
  //       type: "text",
  //       disable: false,
  //       populators: { name: "name", error: "Required" },
  //     },
  //     {
  //       inline: true,
  //       label: "Executing Authority",
  //       isMandatory: true,
  //       key: "executingAuthority",
  //       type: "text",
  //       disable: false,
  //       populators: { name: "executingAuthority", error: "Required" },
  //     },
  //     {
  //       inline: true,
  //       label: "Contract Type",
  //       isMandatory: true,
  //       key: "contractType",
  //       type: "text",
  //       disable: false,
  //       populators: { name: "contractType", error: "Required" },
  //     },
  //     {
  //       inline: true,
  //       label: "Total Contracted Amount",
  //       isMandatory: true,
  //       key: "totalContractedAmount",
  //       type: "number",
  //       disable: false,
  //       populators: { name: "totalContractedAmount", error: "Required", validation: { min: 0 } },
  //     },
  //     {
  //       inline: true,
  //       label: "Completion Period",
  //       isMandatory: true,
  //       key: "completionPeriod",
  //       type: "number",
  //       disable: false,
  //       populators: { name: "line
  // {
  //   head: "Documents",
  //   body: [
  //     {
  //       key: "documents",
  //       type: "table", // or "repeating" section for dynamic rows
  //       fields: [
  //         { label: "Document Type", key: "documentType", type: "text", isMandatory: true },
  //         { label: "File Store", key: "fileStore", type: "text", isMandatory: true },
  //         { label: "Status", key: "status", type: "text", isMandatory: true },
  //         {
  //           label: "Additional Details",
  //           key: "additionalDetails",
  //           type: "object",
  //           fields: [
  //             { label: "File Name", key: "fileName", type: "text", isMandatory: true },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   head: "Additional Details",
  //   body: [
  //     {
  //       inline: true,
  //       label: "Officer In Charge Name",
  //       isMandatory: true,
  //       key: "officerInChargeName",
  //       type: "object",
  //       fields: [
  //         { label: "Code", key: "code", type: "text", isMandatory: true },
  //         { label: "Name", key: "name", type: "text", isMandatory: true },
  //       ],
  //     },
  //     {
  //       inline: true,
  //       label: "Officer In Charge Designation",
  //       isMandatory: true,
  //       key: "officerInChargeDesgn",
  //       type: "text",
  //       disable: false,
  //       populators: { name: "officerInChargeDesgn", error: "Required" },
  //     },
  //     {
  //       inline: true,
  //       label: "Total Estimated Amount",
  //       isMandatory: true,
  //       key: "totalEstimatedAmount",
  //       type: "number",
  //       disable: false,
  //       populators: { name: "totalEstimatedAmount", error: "Required", validation: { min: 0 } },
  //     },
  //   ],
  // },



