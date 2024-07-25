import {
    Header,
    InboxSearchComposer
  } from "@egovernments/digit-ui-react-components";
  import React, { useState, useEffect } from "react";
  import { useTranslation } from "react-i18next";
  import { sorsearchconfig } from "../../configs/SorSearchConfig";
  
  const defaultSearchValues = {
    tenantId:"",
    schemaCode:""
  };

 

  const SorSearch = () => {
    const { t } = useTranslation();
    const [defaultValues, setDefaultValues] = useState(defaultSearchValues); // State to hold default values for search fields
    const sorConfigs = sorsearchconfig();

    useEffect(() => {
      // Set default values when component mounts
      setDefaultValues(defaultSearchValues);
    }, []);

    return (
      <React.Fragment>
        <Header styles={{ fontSize: "32px" }}>{t(sorConfigs?.label)}</Header> 
        <div className="inbox-search-wrapper">
          {/* Pass defaultValues as props to InboxSearchComposer */}
          <InboxSearchComposer configs={sorConfigs} defaultValues={defaultValues}></InboxSearchComposer>
        </div>
      </React.Fragment>
    );
  };
  export default SorSearch;