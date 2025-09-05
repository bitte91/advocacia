import { POST } from './route';
import { NextRequest } from 'next/server';
// Import the mock function from the mocked module
import { mockCreate } from '@prisma/client';

describe('POST /api/contact', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockCreate.mockClear();
    mockCreate.mockResolvedValue({ id: 'test-id' });
  });

  it('should save a contact message with phone as null if an empty string is provided', async () => {
    const requestBody = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '',
      message: 'This is a test message with more than 10 characters.',
    };

    const req = {
      json: async () => requestBody,
    } as unknown as NextRequest;

    await POST(req);

    expect(mockCreate).toHaveBeenCalledTimes(1);
    expect(mockCreate).toHaveBeenCalledWith({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        phone: null, // This assertion is expected to FAIL
        message: 'This is a test message with more than 10 characters.',
      },
    });
  });

  it('should return a 201 status on successful submission', async () => {
    const requestBody = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'This is a valid test message.',
    };

    const req = {
      json: async () => requestBody,
    } as unknown as NextRequest;

    const response = await POST(req);
    const responseBody = await response.json();

    expect(response.status).toBe(201);
    expect(responseBody.success).toBe(true);
  });

  it('should return a 400 status for invalid data', async () => {
    const requestBody = {
      name: 'T',
      email: 'not-an-email',
      message: 'short',
    };

    const req = {
      json: async () => requestBody,
    } as unknown as NextRequest;

    const response = await POST(req);
    const responseBody = await response.json();

    expect(response.status).toBe(400);
    expect(responseBody.success).toBe(false);
  });
});
