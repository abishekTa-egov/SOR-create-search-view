import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import React from "react";

//create functions here based on module name set in mdms(eg->SearchProjectConfig)
//how to call these -> Digit?.Customizations?.[masterName]?.[moduleName]
// these functions will act as middlewares
// var Digit = window.Digit || {};

const businessServiceMap = {};

const inboxModuleNameMap = {};

export const UICustomizations = {
    SorSearchConfig:{
        preProcess:(data)=>{
            const tenantId=Digit.ULBService.getCurrentTenantId();
            data.body.MdmsCriteria.tenantId=tenantId;

            const filters={};
            const custom=data.body.MdmsCriteria.customs;

            const {field, value}=custom || {};
            if (field && field.name && value){
                filters[field.name]=value;
            }

            data.body.MdmsCriteria.filters=filters;
            delete data.body.customs;
            return data;

        }
    }

};