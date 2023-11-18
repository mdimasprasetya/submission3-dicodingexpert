import alertify from 'alertifyjs';
import { createReview } from '../src/scripts/utils/createReview';
/* eslint-disable no-undef */

describe('create review restaurant', () => {
  it('create review success', async () => {
    spyOn(alertify, 'success');
    const cleanedHash = 'rqdv5juczeskfw1e867';
    const review = 'dimas umt';
    const name = 'dimas';

    await createReview({ cleanedHash, name, review });

    expect(alertify.success).toHaveBeenCalled();
  });

  it('create review success', async () => {
    spyOn(alertify, 'error');
    const cleanedHash = 'rqdv5juczeskfw1e867';
    const review = '';
    const name = '';

    await createReview({ cleanedHash, name, review });

    expect(alertify.error).toHaveBeenCalled();
  });
});
