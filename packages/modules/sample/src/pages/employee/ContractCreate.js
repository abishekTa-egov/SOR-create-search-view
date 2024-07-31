import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header } from "@egovernments/digit-ui-react-components";

import { transformCreateData } from "../../utils/createUtils";
import { contractConfig } from "../../configs/ContractCreateConfig";


const ContractCreate = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const reqCreate = {
    url: `/contract/v1/_create`,
    params: {},
    body: {},
    config: {
      enable: false,
    },
  };

  const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCreate);

  const onSubmit = async(data) => {
    console.log(data, "data");
    await mutation.mutate(
      {
        url: `/individual/v1/_create`,
        params: { tenantId },
        body: transformCreateData(data),
        config: {
          enable: true,
        },
      },
    );
  };
  return (
    <div>
      <Header> {t("CREATE_CONTRACT")}</Header>
      <FormComposerV2                                //important
        label={t("SUBMIT_BUTTON")}
        config={contractConfig.map((config) => {
          return {
            ...config,
          };
        })}
        defaultValues={{}}
        onFormValueChange ={ (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
          console.log(formData, "formData");
        }}
        onSubmit={(data,) => onSubmit(data, )}
        fieldStyle={{ marginRight: 0 }}
      />
       
    </div>
  );
}

export default ContractCreate;