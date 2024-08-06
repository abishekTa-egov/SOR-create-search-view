import React,{ useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header ,Toast} from "@egovernments/digit-ui-react-components";
import { formConfig } from "../../configs/SorCreateConfig";
import { transformCreateEstimateData } from "../../utils/createEstimateUtils";
import Slider from "../../components/Slider";

const SorCreate = () => {
    
    const tenantId = Digit.ULBService.getCurrentTenantId();
    const { t } = useTranslation();
    const [toast, setToast] = useState({ show: false, error: false, message: "" });
    const history = useHistory();
    const [formKey, setFormKey] = useState(0);
    const reqCreate = {
        url:`/mdms-v2/v2/_create/digitAssignment.estimate`,   //CAL
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
                url: `/mdms-v2/v2/_create/digitAssignment.estimate`,   //CAL
                params: {},
                body: transformCreateEstimateData(data),
                config: {
                    enable: true,
                },
            },
            {
                onSuccess: () => {
                  setToast({ show: true, error: false, message: t("Create Estimate Sucess") });
                  // logic to clear data
                  setFormKey(prevkey => prevkey + 1)
                },
                onError: () => {
                  setToast({ show: true, error: true, message: t("Create Estimate Failure") });
                },
              }
        );
    };

    return (
        <div>
            <Slider/>
            {/* {console.log("sor create triggered")} */}
            <div>
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
            {toast.show && 
            <Toast 
              error={toast.error} 
              label={toast.message} 
              onClose={() => setToast({ show: false, error: false, message: "" })}
              isDleteBtn={true}
            />}
            </div>

        </div>
    );

}

export default SorCreate;