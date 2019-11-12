import { ApiResponseBase } from './ApiResponseBase';
import { ResponseMsg } from '@common/types/api';
import { ErrorResponseOption } from './typing';
import { getErrorMsg } from '../../lib/error';

export class ApiErrorResponse implements ApiResponseBase {
  format<T>(option: ErrorResponseOption): ResponseMsg<T> {
    const responseMsg: ResponseMsg<T> = {
      code: option.error_no,
      message: option.error_message ? option.error_message : getErrorMsg(option.error_no),
      data: null
    };
    return responseMsg;
  }
}
