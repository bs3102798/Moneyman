import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/Dashboard';
import Portfolio from './components/DataForm';
import Resume from './components/Resume';
import Contact from './components/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/dataform" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/login" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <div>Welcome to the homepage!</div>;
};
export default App;


DisplayedCalendarOption({ calendar, onToggle, onColorChanged }) ;{
  return (
    <>
      <div>{calendar.name}</div>
      <div className='icon-btn'>
        <IconButton onClick={() => onToggle()}>
          {calendar.isDisplayed ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </div>
      <FormControl className='color-picker' size="small">
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={calendar.color.code}
          onChange={(e) => onColorChanged(e.target.value)}
        >
          {Object.keys(colors).map(key => (
            <MenuItem key={`color-${key}`} value={key}>
              <ColorPickerOption color={colors[key]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default App;