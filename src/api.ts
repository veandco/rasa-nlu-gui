import $ from 'jquery';
import {
    IRasaNLUDataResult,
    IRasaNLUData,
    ICommonExamplesResult,
    ICommonExample,
} from '@/interfaces';

let baseUrl = 'http://localhost:8088';

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
}
