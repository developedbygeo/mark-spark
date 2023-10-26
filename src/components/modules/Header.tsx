import { Button } from 'src/components/Button';

const Header = () => {
  const handleOpenFile = () => window.actionsApi.showOpenDialog();

  return (
    <header className="bg-gradient-background">
      <div className="flex items-center  justify-between h-full py-6 px-6">
        <div className="flex gap-x-2">
          <Button>New File</Button>
          <Button onClick={handleOpenFile}>Open File</Button>
          <Button>Save HTML</Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="outline">Save File</Button>
          <Button variant="outline">Revert Changes</Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="outline">Show File</Button>
          <Button variant="outline">Open in Default App</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
