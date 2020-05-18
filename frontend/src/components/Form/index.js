import React from 'react';

import { Container, MainTit, Navigation, Button } from './styles';

function Form() {
  return (
      <Container>
          <MainTit>Yay, we love dogs! Give us the basics about your pup.</MainTit>

          <form>
            <label>
              Name
              <input placeholder="Pet's name"/>
            </label>

            <label>
              Breed
              <input placeholder="Pet's breed"/>
            </label>

            <label>
              Birthday
              <input type="date" placeholder="MM/DD/YYYY"/>
            </label>
          </form>

          <Navigation>
            <Button fill={ false }>Back</Button>
            <Button fill={ true }>Next</Button>
          </Navigation>
      </Container>
  );
}

export default Form;