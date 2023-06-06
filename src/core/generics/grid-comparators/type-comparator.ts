import { ClrDatagridComparatorInterface } from '@clr/angular';
import {FileTableDisplay} from "../../dashboard-shared/files-table/classes/file-table-display";

export class TypeComparator implements ClrDatagridComparatorInterface<FileTableDisplay> {
  compare(a: FileTableDisplay, b: FileTableDisplay) {
    if (a.type === b.type) {
      return 0;
    }
    return a.type > b.type ? 1 : -1;
  }
}

export class NameComparator implements ClrDatagridComparatorInterface<FileTableDisplay> {
  compare(a: FileTableDisplay, b: FileTableDisplay) {
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
  }
}

export class DateComparator implements ClrDatagridComparatorInterface<FileTableDisplay> {
  compare(a: FileTableDisplay, b: FileTableDisplay) {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    if (dateA === dateB) {
      return 0;
    }
    return dateA > dateB ? 1 : -1;
  }
}
