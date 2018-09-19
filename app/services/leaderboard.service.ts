import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LeaderboardService {

  constructor(private _http:Http ) { }

  public get(): Promise<any> {
    let data = {
      Categories: [{
        Associations: null,
        AttributeList: [{
          AttributeText: null,
          CategoryCode: null,
          ID: environment.api.attribute.id.key,
          Value: ''
        }],
        CategoryCode: environment.api.categoryCode
      }],
      oRequestContext: {
        ApplicationID: environment.api.applicationId,
        AuthToken: environment.api.authToken,
        CallerID: environment.api.callerId,
        EntityName: environment.api.entityName
      }
    };

    if(environment.api.useMock) {
      return new Promise((resolve, reject) => {
        resolve({"Categories":[{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":736,"Type":null,"Value":""},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":736,"Type":null,"Value":"44"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null},{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":734,"Type":null,"Value":"BAND E"},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":734,"Type":null,"Value":"0"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null},{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":733,"Type":null,"Value":"BAND D"},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":733,"Type":null,"Value":"0"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null},{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":732,"Type":null,"Value":"BAND C"},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":732,"Type":null,"Value":"0"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null},{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":731,"Type":null,"Value":"Band A"},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":731,"Type":null,"Value":"123"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null},{"Associations":null,"AttributeList":[{"AttributeText":null,"CategoryCode":null,"ID":"A_BAND_ID","InstanceID":730,"Type":null,"Value":"Band B"},{"AttributeText":null,"CategoryCode":null,"ID":"A_SCORE","InstanceID":730,"Type":null,"Value":"55"}],"CategoryCode":"CATAA00049","CategoryName":null,"CategoryType":0,"OverrideType":0,"ParentGroupCode":null}],"ImageBytes":null,"oPageResponseContext":{"PageIndex":1,"Pagesize":100,"TotalNoOfRecords":6},"oResponseContext":{"ApplicationID":"WBSAA00369","AuthMode":null,"AuthSessionToken":"05cbeb25-ccd7-48f8-83b7-96510f2d0add","AuthToken":null,"CallerID":"pL7PnVpw5s","HashKey":null,"OperationStatus":null,"ResponseCode":null,"SessionToken":null,"TransactionID":null,"VordelFlag":null}});
      });
    }
    else{
      return this._http.post(environment.api.baseUrl+'/CustomEntityService/CustomEntitySearch',data)
          .map((response)=>
          {
            return response.json()
          })
          .toPromise();
    }
  }

  public updateBand(band, score): Promise<any> {
    let data = {
      Categories: [{
        Associations: null,
        AttributeList: [{
          ID: environment.api.attribute.id.key,
          Value: band
        }, {
          ID: environment.api.attribute.score.key,
          Value: score
        }
        ],
        CategoryCode: environment.api.categoryCode
      } ],
      oPageRequestContext: null,
      oRequestContext: {
        ApplicationID: environment.api.applicationId,
        AuthToken: environment.api.authToken,
        CallerID: environment.api.callerId,
        EntityName: environment.api.entityName
      }
    };

    if(environment.api.useMock) {
      return new Promise((resolve, reject) => {
        resolve({fake:'todo'});
      });
    }
    else{
      return this._http.post(environment.api.baseUrl+'/CustomEntityService/CustomEntitySave',data)
          .map((response)=>
          {
            return response.json();
          })
          .toPromise();
    }
  }
}
