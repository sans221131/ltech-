# Admin Invoice Management System

## Overview
Complete admin authentication and invoice management system for LeafWay Tech.

## Features
- ✅ Secure admin login with hardcoded credentials
- ✅ Protected admin routes (auto-redirect to login if not authenticated)
- ✅ Invoice creation with full validation
- ✅ Invoice listing and management
- ✅ User-facing invoice payment page
- ✅ Automatic redirect after payment completion
- ✅ URL validation for redirect URLs

## Admin Access

### Credentials
- **Username**: `travel.leafwaysoln`
- **Password**: `Wetravelaroundtheworld`

### Admin Routes
- `/admin/login` - Login page
- `/admin/invoices` - Invoice management dashboard

## How It Works

### 1. Admin Login
1. Visit `/admin/login`
2. Enter credentials
3. Session cookie is set (24-hour expiry)
4. Redirected to `/admin/invoices`

### 2. Creating an Invoice
1. Click "Create Invoice" button
2. Fill in the form:
   - **Customer Name*** (required)
   - **Customer Email** (optional)
   - **Customer Phone** (optional)
   - **Amount*** (required, in currency units e.g., 100.00)
   - **Currency*** (INR/USD/EUR/AED)
   - **Redirect URL*** (required, must be valid URL)
   - **Description** (optional)
3. Click "Create Invoice"
4. A unique receipt number is generated (e.g., LW-2025-0001)
5. Invoice appears in the list

### 3. Customer Payment Flow
1. Admin shares the receipt number with the customer (e.g., LW-2025-0001)
2. Customer visits `/invoices` or clicks "PAY INVOICE" in header
3. Customer enters the receipt number
4. Invoice details are displayed
5. Customer clicks "Pay securely"
6. Payment is processed (currently mock payment)
7. Invoice status changes to "paid"
8. Customer is automatically redirected to the provided URL after 2 seconds

## Database Schema

```typescript
invoices = {
  id: string (UUID)
  receipt: string (unique, e.g., LW-2025-0001)
  customer_name: string | null
  customer_email: string | null
  customer_phone: string | null
  amount_in_paise: number (amount * 100)
  currency: string (INR/USD/EUR/AED)
  provider: string (default: "mock")
  status: string (draft/paid/cancelled/expired)
  notes: jsonb ({
    redirect_url: string,
    description: string
  })
  created_at: timestamp
  updated_at: timestamp
}
```

## API Endpoints

### Admin APIs (Protected)
- `POST /api/admin/login` - Authenticate admin
- `POST /api/admin/logout` - Clear session
- `GET /api/admin/invoices` - List all invoices
- `POST /api/admin/invoices` - Create new invoice

### Public APIs
- `GET /api/invoices/lookup?ref=LW-2025-0001` - Look up invoice by receipt
- `POST /api/invoices/pay` - Process payment (mock)

## File Structure

```
app/
├── admin/
│   ├── layout.tsx                    # Protected layout with auth check
│   ├── AdminNav.tsx                  # Admin navigation component
│   ├── login/
│   │   └── page.tsx                  # Login form
│   └── invoices/
│       └── page.tsx                  # Invoice management page
│
├── invoices/
│   └── page.tsx                      # User-facing payment page
│
└── api/
    ├── admin/
    │   ├── login/route.ts           # Login endpoint
    │   ├── logout/route.ts          # Logout endpoint
    │   └── invoices/route.ts        # Invoice CRUD
    └── invoices/
        ├── lookup/route.ts          # Invoice lookup
        └── pay/route.ts             # Payment processing

lib/
└── auth.ts                          # Authentication utilities

db/
├── schema.ts                        # Database schema
└── index.ts                         # Database connection
```

## Testing Locally

1. **Start the dev server**:
   ```powershell
   npm run dev
   ```

2. **Test admin login**:
   - Visit: http://localhost:3000/admin/login
   - Use credentials above
   - Should redirect to `/admin/invoices`

3. **Create a test invoice**:
   - Click "Create Invoice"
   - Fill form with test data
   - Redirect URL example: `https://example.com/thank-you`
   - Note the generated receipt number

4. **Test customer payment**:
   - Visit: http://localhost:3000/invoices
   - Enter the receipt number
   - Click "Pay securely"
   - Should see success message and redirect after 2 seconds

5. **View invoice in admin**:
   - Go back to `/admin/invoices`
   - Invoice status should be "paid"

## Security Notes

- Credentials are hardcoded in `lib/auth.ts`
- Session uses httpOnly cookies
- Admin routes are protected via Next.js server components
- URL validation ensures redirect URLs are valid
- For production: Consider using environment variables for credentials

## Future Enhancements

- [ ] Integrate real payment gateway (Razorpay/Stripe)
- [ ] Email notifications on invoice creation
- [ ] PDF invoice generation
- [ ] Invoice editing and cancellation
- [ ] Payment history and analytics
- [ ] Multi-currency support with live exchange rates
- [ ] Customer portal with invoice history

## Support

For issues or questions, contact the development team.
