import type { Pinia } from 'pinia'
import { Model } from '@'

const cacheSymbol = Symbol('hydratedDataCache')

export function getHydratedCache(pinia: Pinia): Map<string, Model> {
  if (!(cacheSymbol in pinia)) {
    ;(pinia as any)[cacheSymbol] = new Map<string, Model>();
  }
  return (pinia as any)[cacheSymbol] as Map<string, Model>
}