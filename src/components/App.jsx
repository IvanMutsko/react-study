import PaintingList from './PaintingList';
import paintings from '../paintings.json';
import Section from './Section';

export default function App() {
  return (
    <div>
      <Section title="Top image">
        <PaintingList items={paintings} />
      </Section>
      <Section title="New image">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}

