import { BlockToolData, ElementMetadata } from '../tools';
import { Metadata } from '../tools/metadata';

/**
 * Tool's saved data
 */
export interface SavedData {
  id: string;
  metadata: Metadata;
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
  metadata?: Metadata;
  elementMetadata?: ElementMetadata;
  tool?: string;
  data?: BlockToolData;
  time?: number;
  isValid: boolean;
}
