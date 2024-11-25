import { ApiResponse } from '@/interfaces'

export const apiResponse = <D = unknown>(
  success: boolean,
  message: string,
  data?: D
): ApiResponse<D> => {
  return {
    success,
    message,
    data,
  }
}
