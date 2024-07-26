import {
  Header,
  InboxSearchComposer
} from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { sorsearchconfig } from "../../configs/SorSearchConfig";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const defaultSearchValues = {
  tenantId: "",
  schemaCode: ""
};



const SorSearch = () => {
  const { t } = useTranslation();
  const [defaultValues, setDefaultValues] = useState(defaultSearchValues); // State to hold default values for search fields
  const sorConfigs = sorsearchconfig();
  const history = useHistory();

  useEffect(() => {
    // Set default values when component mounts
    setDefaultValues(defaultSearchValues);
  }, []);

  const onClickRow = (data) => {
    console.log(data);
    const row = data.original.data.name;
    console.log(row);
    history.push(`/microplan-ui/employee/sample/view-sor/${row}`);

  }

  return (
    <React.Fragment>
      <Header styles={{ fontSize: "32px" }}>{t(sorConfigs?.label)}</Header>
      <div className="inbox-search-wrapper">
        {/* Pass defaultValues as props to InboxSearchComposer */}
        <InboxSearchComposer
          configs={sorConfigs}
          defaultValues={defaultValues}
          additionalConfig={{
            resultsTable: {
              onClickRow
            }
          }}>

        </InboxSearchComposer>
      </div>
    </React.Fragment>
  );
};
export default SorSearch;