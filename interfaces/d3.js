declare class _D3_TSV_CSV {
  parseRows(file: string): Array<Object>
}

declare class _D3_SCALE {
  linear(): Object
}

declare class _D3_SVG {
  line(): Object;
}

declare class _D3 {
  tsv: _D3_TSV_CSV;
  csv: _D3_TSV_CSV;
  scale: _D3_SCALE;
  svg: _D3_SVG;

  text(url: string, callback: Function): void;
  range(range: number): Array<number>;
  extent<T>(list: Array<T>, callback: (item: T) => any): Array<T>;
  max<T>(list: Array<T>): T;
  select(selector: string): Object;
}

declare var d3: _D3;
