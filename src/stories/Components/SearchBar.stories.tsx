import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
};

export const Default = () => (
  <SearchBar
    onSearch={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
