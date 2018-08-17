import $ from 'jquery';
import {
  IRasaNLUDataResult,
  IRasaNLUData,
  ICommonExamplesResult,
  ICommonExample,
  IRegexFeature,
  IEntitySynonym,
} from '@/interfaces';

let baseUrl = 'http://localhost:8088';

export interface IGenericResult {
  status: number;
  message: string;
}

export default class API {
  public static setBaseUrl(url: string) {
    baseUrl = url;
  }

  public static fetchRasaNLUData(): Promise<IRasaNLUDataResult> {
    return new Promise((resolve) => {
      $.ajax({
        url: baseUrl + '/data',
        method: 'GET',
        dataType: 'json',
      }).done((response: IRasaNLUData) => {
        resolve({
          status: 0,
          message: 'Successfully got Rasa NLU data',
          data: response,
        });
      }).fail((response: any) => {
        resolve({
          status: 1,
          message: 'Failed to get Rasa NLU data',
          data: undefined,
        });
      });
    });
  }

  public static fetchCommonExamples(): Promise<ICommonExamplesResult> {
    return new Promise((resolve) => {
      $.ajax({
        url: baseUrl + '/common-example',
        method: 'GET',
        dataType: 'json',
      }).done((response: ICommonExample[]) => {
        resolve({
          status: 0,
          message: 'Successfully got common examples',
          data: response,
        });
      }).fail((response: any) => {
        resolve({
          status: 1,
          message: 'Failed to get common examples',
          data: undefined,
        });
      });
    });
  }

  public static putCommonExamples(data: ICommonExample[]): Promise<IGenericResult> {
    return new Promise((resolve) => {
      $.ajax({
        url: baseUrl + '/common-examples',
        method: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
      }).done((response: any) => {
        resolve({
          status: 0,
          message: 'Successfully put common examples',
        });
      }).fail((response: any) => {
        resolve({
          status: 1,
          message: 'Failed to put common examples',
        });
      });
    });
  }

  public static putRegexFeatures(data: IRegexFeature[]): Promise<IGenericResult> {
    return new Promise((resolve) => {
      $.ajax({
        url: baseUrl + '/regex-features',
        method: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
      }).done((response: any) => {
        resolve({
          status: 0,
          message: 'Successfully put regex features',
        });
      }).fail((response: any) => {
        resolve({
          status: 1,
          message: 'Failed to put regex features',
        });
      });
    });
  }

  public static putEntitySynonyms(data: IEntitySynonym[]): Promise<IGenericResult> {
    return new Promise((resolve) => {
      $.ajax({
        url: baseUrl + '/entity-synonyms',
        method: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
      }).done((response: any) => {
        resolve({
          status: 0,
          message: 'Successfully put entity synonyms',
        });
      }).fail((response: any) => {
        resolve({
          status: 1,
          message: 'Failed to put entity synonyms',
        });
      });
    });
  }
}
