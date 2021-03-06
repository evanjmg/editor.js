import { BlockToolData, ElementMetadata } from '../tools';
import { Metadata } from '../tools/metadata';

/**
 * Output of one Tool
 *
 * @template Type - the string literal describing a tool type
 * @template Data - the structure describing a data object supported by the tool
 */
export interface OutputBlockData<Type extends string = string, Data extends object = any> {
  /**
   * Unique Id of the block
   */
  id?: string;
  /**
   * Element metadata
   */
  metadata?: Metadata;
  /**
   * Element metadata
   */
  elementMetadata?: ElementMetadata;
  /**
   * Tool type
   */
  type: Type;
  /**
   * Saved Block data
   */
  data: BlockToolData<Data>;
}

export interface OutputData {
  /**
   * Editor's version
   */
  version?: string;

  /**
   * Timestamp of saving in milliseconds
   */
  time?: number;

  /**
   * Saved Blocks
   */
  blocks: OutputBlockData[];
}
