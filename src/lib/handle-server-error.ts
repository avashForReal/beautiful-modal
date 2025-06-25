import { toast } from 'sonner'
import { parseError } from './parse-error'

export function handleServerError(error: unknown) {
  const errMsg = parseError(error)
  toast(errMsg)
}