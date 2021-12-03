import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
};

export const Default = () => (
  <SearchBar
    onSearch={function (value: string): void {
      throw new Error('Function not implemented.');
    }}
  />
);
