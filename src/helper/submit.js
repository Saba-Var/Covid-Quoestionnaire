function submit(ctx, dispatch) {
  let formData = JSON.parse(JSON.stringify(ctx));
  const test = formData.had_antibody_test;
  const antibodies = formData.antibodies;
  if (antibodies) {
    if (antibodies.test_date === '') delete formData.antibodies;
    else {
      antibodies.number = +antibodies.number;
      antibodies.test_date = antibodies.test_date.replace(/-/g, '/');
    }
  }
  if (formData.covid_sickness_date) {
    formData.covid_sickness_date = formData.covid_sickness_date.replace(
      /-/g,
      '/'
    );
  }
  formData.number_of_days_from_office = +formData.number_of_days_from_office;
  if (test) {
    if (test === 'true') formData.had_antibody_test = true;
    else formData.had_antibody_test = false;
  }

  formData.had_vaccine === 'yes'
    ? (formData.had_vaccine = true)
    : (formData.had_vaccine = false);

  for (const key in formData) {
    if (formData[key] === '') delete formData[key];
  }

  try {
    async function postData() {
      const response = await fetch('https://covid19.devtest.ge/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok === true) {
        dispatch({ type: 'reset' });
      } else throw new Error('fetch failed');
    }
    postData();
  } catch (error) {
    console.log(error);
  }
}

export default submit;
