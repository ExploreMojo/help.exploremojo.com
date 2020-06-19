import React from 'react';
import Layout from '../components/layout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function ChapterLayout({ children }) {
  return (
    <Layout>
      <Container maxWidth="xl" className="ChapterLayout">
        <Grid container spacing={3}>
          <Grid item sm={12} md={10} xl={8}>
            {children}
          </Grid>
        </Grid>
      </Container>      
    </Layout>
  );
}