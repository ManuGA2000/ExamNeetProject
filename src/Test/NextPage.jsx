import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Select, MenuItem, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import './Login.css';

const NextPage = () => {
  const navigate = useNavigate();
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [language, setLanguage] = useState('English');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleDetailsClick = () => {
    setShowDetails(true);
    setTimeout(() => setShowDetails(false), 3000);
  };

  const handleStartTest = () => {
    navigate('/AddExam');
  };

  const handleTestCardClick = (testName) => {
    setSelectedTest(testName);
  };

  const tests = [
    { name: 'Biology Test', className: 'biology-test' },
    { name: 'Ziology Test', className: 'ziology-test' },
    { name: 'Chemistry Test', className: 'chemistry-test' },
    { name: 'Geography Test', className: 'geography-test' },
  
  ];

  return (
    <>
      <div className="logo-top">
        <img
          src="https://play-lh.googleusercontent.com/8kJoKhrIJV8ml9ru61THWQIvx2AUlw0MX5Xa2SF9FHcLdLN4lmTKF-CV7U-HANadrts"
          alt=""
          className="logo"
        />
      </div>

      <Container maxWidth="md">
        {selectedTest === null ? (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Syllabus info
            </Typography>
            <Grid container spacing={2}>
              {tests.map((test, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    className={`test-card ${test.className}`}
                    onClick={() => handleTestCardClick(test.name)}
                  >
                    <CardContent>
                      <Typography variant="h6">{test.name}</Typography>
                      <Typography sx={{ color: '#1976d2', mt: 2 }} component="p">
                        CLICK TO SEE DETAILS.
                        <Typography component="span" sx={{ color: '#1976d2', fontSize: '1.5rem' }}>
                          &#8594;
                        </Typography>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <>
            <div className="back-arrow-info" onClick={() => setSelectedTest(null)}>
              &#8592; {/* Unicode character for left arrow */}
            </div>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h4" gutterBottom>
                {selectedTest}
              </Typography>
              <Paper
                elevation={3}
                sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}
              >
                <Box sx={{ flex: 1, mx: 1 }}>
                  <Typography variant="h6">Date & Time</Typography>
                  <Typography variant="body1">{dateTime}</Typography>
                </Box>
                <Box sx={{ flex: 1, mx: 1, cursor: 'pointer' }} onClick={handleDetailsClick}>
                  <Typography variant="h6">Test Details</Typography>
                  {showDetails && (
                    <Typography variant="body2" color="textSecondary">
                      Details about the test
                    </Typography>
                  )}
                </Box>
                <Box sx={{ flex: 1, mx: 1 }}>
                  <Typography variant="h6">Select Language</Typography>
                  <Select
                    value={language}
                    onChange={handleLanguageChange}
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Kannada">Kannada</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                  </Select>
                </Box>
              </Paper>
              <Box sx={{ mt: 4, textAlign: 'left' }}>
                <Typography variant="h6" gutterBottom>
                  Syllabus Information
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  Detailed information about the syllabus.
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Grid container justifyContent="space-between">
                  <Button variant="contained" color="primary" onClick={handleStartTest}>
                    Start Test
                  </Button>
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default NextPage;
