import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header } from "@egovernments/digit-ui-react-components";
import { formConfig } from "../../configs/SorCreateConfig";
import { transformCreateData } from "../../utils/createUtils";

const SorCreate = () => {
    debugger;
    const tenantId = Digit.ULBService.getCurrentTenantId();
    const { t } = useTranslation();
    const history = useHistory();
    const reqCreate = {
        url: `/sor/v1/_create`,   //CAL
        params: {},
        body: {},
        config: {
            enable: false,
        },
    };

    const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCreate);

    const onSubmit = async (data) => {
        console.log(data, "data");
        await mutation.mutate(
            {
                url: `/sor/v1/_create`,   //CAL
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
            {console.log("sor create triggered")}
            <Header> {t("CREATE_SOR")}</Header>
            <FormComposerV2                                //important
                label={t("SUBMIT_BUTTON")}
                config={formConfig.map((config) => {
                    return {
                        ...config,
                    };
                })}
                defaultValues={{}}
                onFormValueChange={(setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
                    console.log(formData, "formData");
                }}
                onSubmit={(data,) => onSubmit(data,)}
                fieldStyle={{ marginRight: 0 }}
            />

        </div>
    );

}

export default SorCreate;