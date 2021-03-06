import * as React from 'react';
import { IStyle, ITheme } from '../../Styling';
import { IStyleFunctionOrObject } from '../../Utilities';
import { PivotItem } from './PivotItem';

/**
 * {@docCategory Pivot}
 */
export interface IPivot {
  /**
   * Sets focus to the first pivot tab.
   */
  focus(): void;
}

/**
 * {@docCategory Pivot}
 */
export interface IPivotProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional callback to access the IPivot interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: React.RefObject<IPivot>;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IPivotStyleProps, IPivotStyles>;

  /**
   * Theme provided by High-Order Component.
   */
  theme?: ITheme;

  /**
   * Additional css class to apply to the Pivot
   * @defaultvalue undefined
   */
  className?: string;

  /**
   * Default selected key for the pivot. Only provide this if the pivot is an uncontrolled component;
   * otherwise, use the `selectedKey` property.
   *
   * This property is also mutually exclusive with `defaultSelectedIndex`.
   */
  defaultSelectedKey?: string;

  /**
   * Key of the selected pivot item. Updating this will override the Pivot's selected item state.
   * Only provide this if the pivot is a controlled component where you are maintaining the
   * current state; otherwise, use `defaultSelectedKey`.
   */
  selectedKey?: string | null;

  /**
   * Callback for when the selected pivot item is changed.
   */
  onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => void;

  /**
   * Link size (normal, large)
   */
  linkSize?: PivotLinkSizeType;

  /**
   * Link format (links, tabs)
   */
  linkFormat?: PivotLinkFormatType;

  /**
   * Whether to skip rendering the tabpanel with the content of the selected tab.
   * Use this prop if you plan to separately render the tab content
   * and don't want to leave an empty tabpanel in the page that may confuse Screen Readers.
   */
  headersOnly?: boolean;

  /**
   * Callback to customize how IDs are generated for each tab header.
   * Useful if you're rendering content outside and need to connect aria-labelledby.
   */
  getTabId?: (itemKey: string, index: number) => string;
}

/**
 * {@docCategory Pivot}
 */
export type IPivotStyleProps = Required<Pick<IPivotProps, 'theme'>> &
  Pick<IPivotProps, 'className'> &
  Pick<IPivotProps, 'linkSize'> &
  Pick<IPivotProps, 'linkFormat'> & {
    /**
     * Indicates whether Pivot link is selected.
     * @deprecated Is not populated with valid value. Specify `linkIsSelected` styling instead.
     */
    linkIsSelected?: boolean;
  };

/**
 * {@docCategory Pivot}
 */
export interface IPivotStyles {
  /**
   * Style for the root element.
   */
  root: IStyle;
  link: IStyle;
  linkContent: IStyle;
  linkIsSelected: IStyle;
  text: IStyle;
  count: IStyle;
  icon: IStyle;
  itemContainer?: IStyle;
}

/**
 * {@docCategory Pivot}
 * Display mode for the pivot links/tabs
 */
export type PivotLinkFormatType = 'links' | 'tabs';

/**
 * {@docCategory Pivot}
 * Size of the pivot links/tabs
 */
export type PivotLinkSizeType = 'normal' | 'large';

/**
 * {@docCategory Pivot}
 * @deprecated Use strings 'links' or 'tabs' instead of this enum
 */
export const enum PivotLinkFormat {
  /**
   * Display Pivot Links as links
   */
  links = 'links',

  /**
   * Display Pivot Links as Tabs
   */
  tabs = 'tabs',
}

/**
 * {@docCategory Pivot}
 * @deprecated Use strings 'normal' or 'large' instead of this enum
 */
export const enum PivotLinkSize {
  /**
   * Display Link using normal font size
   */
  normal = 'normal',

  /**
   * Display links using large font size
   */
  large = 'large',
}
