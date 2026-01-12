const { test, expect } = require('@playwright/test');

test.describe.serial('Reqres API - User Flow Validation', () => {

  // Variable to store userId created in the first test
  let userId;

  // Common headers for all API requests
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': '' // Add api key of account created in the 
  };

  /**
   * Create a user
   * - Validate HTTP response status code
   * - Fetch and store userId
   */
  test('Create User', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
      headers,
      data: {
        name: 'Mallikarjun',
        job: 'QA Engineer'
      }
    });

    // Validate response status
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // Store userId for next tests
    userId = responseBody.id;
    expect(userId).toBeTruthy();

    console.log('User created successfully. User ID:', userId);
  });

  /**
   * Get the created user details
   * - Fetch user details
   * - Validate response status
   *
   * Note:
   * Reqres does not persist newly created users,
   * so a static user is used for validation.
   */
  test('Get User Details', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2', {
      headers
    });

    // Validate response status
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    // Basic validation of fetched user data
    expect(responseBody.data).toBeDefined();
    console.log('Fetched user details:', responseBody.data);
  });

  /**
   * Update user details
   * - Update user's name
   * - Validate updated name in response
   */
  test('Update User', async ({ request }) => {

    // Ensure userId is available before updating
    expect(userId).toBeTruthy();

    const response = await request.put(
      `https://reqres.in/api/users/${userId}`,
      {
        headers,
        data: {
          name: 'Mallikarjun Updated',
          job: 'Senior QA Engineer'
        }
      }
    );

    // Validate response status
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    // Validate updated name
    expect(responseBody.name).toBe('Mallikarjun Updated');

    console.log('User updated successfully. Updated name:', responseBody.name);
  });

});
