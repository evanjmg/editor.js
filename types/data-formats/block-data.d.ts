import { BlockToolData, ElementMetadata } from '../tools';

/**
 * Tool's saved data
 */
export interface SavedData {
  id: string;
  elementMetadata: ElementMetadata;
  tool: string;
  data: BlockToolData;
  time: number;
}

/**
 * Tool's data after validation
 */
export interface ValidatedData {
  id?: string;
  elementMetadata?: ElementMetadata;
  tool?: string;
  data?: BlockToolData;
  time?: number;
  isValid: boolean;
}
