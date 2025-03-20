// INFO: this is a file generated by the ui library, though genetally all the libs should have their direcotry
// TODO: move to own directory and configure the ui lib accordingly

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
