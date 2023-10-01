import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { ImageLink } from './components/ImageLink';
function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* put everything in the middle of page */}
      <div className="h-screen bg-white dark:bg-black flex justify-center pt-56">
        <div>
          <div className="flex justify-center">
            <ImageLink url="https://vitejs.dev" source={viteLogo} alt="Vite Logo" />
            <ImageLink url="https://react.dev" source={reactLogo} alt="React Logo" />
          </div>
          <div>
            <h1 className="text-6xl dark:text-white">Vite + React</h1>
          </div>
          <div className="flex justify-center">
            <button
              className="text-3xl border-2 border-cyan-400 rounded hover:bg-slate-600"
              onClick={() => setCount((count) => count + 1)}
            >
              <span className="dark:text-white">count is {count}</span>
            </button>
          </div>
          <div className="flex justify-center">
            <p className="dark:text-white">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <div>
            <p className="dark:text-white">Click on the Vite and React logos to learn more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
