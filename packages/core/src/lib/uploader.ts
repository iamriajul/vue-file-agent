import FileRecord from './file-record';
import { ConfigureFn } from './uploader/ajax-request';
import { CreateFormDataFn } from './uploader/upload-helper';
import { FileAgentProps } from './props';

export interface Uploader {
  upload: (
    url: string,
    headers: object,
    props: FileAgentProps,
    fileRecords: FileRecord[],
    createFormData?: CreateFormDataFn,
    progressFn?: (progress: number) => void,
    configureFn?: ConfigureFn,
  ) => Promise<any>;

  deleteUpload: (
    url: string,
    headers: object,
    props: FileAgentProps,
    fileRecord: FileRecord,
    uploadData?: any,
    configureFn?: ConfigureFn,
  ) => Promise<any>;

  updateUpload: (
    url: string,
    headers: object,
    props: FileAgentProps,
    fileRecord: FileRecord,
    uploadData?: any,
    configureFn?: ConfigureFn,
  ) => Promise<any>;
}