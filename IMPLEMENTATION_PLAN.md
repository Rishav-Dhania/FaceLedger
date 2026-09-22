# Automated Student Attendance Monitoring and Analytics System

## 1. Product Scope

The application supports two roles:

- **Student:** Login with faculty-provided credentials, view attendance, academic calendar, digital timetable, profile, and notifications.
- **Faculty:** View assigned classes and timetable, mark attendance from a group photograph or manually, view reports, declare classes off, and notify affected students.

## 2. Recommended Architecture

- **Frontend:** React Native with Expo Router, NativeWind, Moti, and Lucide icons.
- **Backend:** Supabase for authentication, PostgreSQL, storage, realtime updates, and row-level security.
- **Notifications:** Expo Notifications with device push-token registration.
- **Secure storage:** `expo-secure-store` for local session data.
- **Face processing:** Supabase Edge Function or a dedicated secure service. Face recognition must return confidence scores and require faculty review before final submission.

## 3. Navigation Structure

Replace the current fixed student tabs with role-aware route groups:

```text
app/
  _layout.tsx
  index.tsx
  auth/
    login.tsx
    forgot-password.tsx
  student/
    _layout.tsx
    dashboard.tsx
    attendance.tsx
    calendar.tsx
    timetable.tsx
    notifications.tsx
    profile.tsx
  faculty/
    _layout.tsx
    dashboard.tsx
    classes.tsx
    attendance/
      index.tsx
      camera.tsx
      review.tsx
      manual.tsx
    reports.tsx
    timetable.tsx
    notifications.tsx
    profile.tsx
```

After login, fetch the authenticated user role and redirect to the corresponding route group. Protect routes so students cannot access faculty screens and vice versa.

## 4. Data Model

Create these core tables/entities:

- `users`: name, email, role, department, status
- `students`: roll number, semester, section, program
- `faculty`: employee ID, department, designation
- `courses`: course code, name, department, semester
- `class_sections`: course, faculty, section, room, semester
- `enrollments`: student-to-class relationship
- `timetable_entries`: day, start time, end time, room, course, faculty
- `academic_calendar`: date, type, title, description
- `attendance_sessions`: class, date, time, status, capture method
- `attendance_records`: session, student, status, confidence score, marker, correction reason
- `class_cancellations`: class, date, message, created by
- `notifications`: recipient, title, message, type, read state, related entity
- `audit_logs`: actor, action, affected record, old value, new value, timestamp

Attendance statuses should include `present`, `absent`, `late`, `excused`, and `pending_review`.

## 5. Authentication and Authorization

- Email or institutional ID login.
- Password reset and logout.
- Persistent sessions.
- Faculty-created student credentials or invitation flow.
- Mandatory first-login password change for students.
- Role-based route protection.
- Supabase row-level security for student-owned data.
- Faculty access restricted to assigned courses and students.
- No passwords or face images stored directly in the mobile app.

## 6. Student Features

### Dashboard

Show overall attendance, subjects below the threshold, today's timetable, upcoming holidays, recent announcements, and shortcuts.

### Attendance

Implement a searchable digital table with subject, total classes, present, absent, percentage, date details, subject filters, and month filters. Highlight attendance below the required threshold.

### Academic Calendar

Provide a month view with working days, holidays, exams, events, and class-off dates.

### Digital Timetable

Use a structured weekly grid or rows containing day, period, time, subject, faculty, room, and delivery mode. Do not use timetable images.

### Notifications and Profile

Show class cancellations, timetable changes, attendance alerts, and announcements. Allow students to manage limited profile information and log out.

## 7. Faculty Features

### Dashboard

Show today's assigned classes, upcoming classes, sessions requiring review, attendance completion statistics, cancellations, and low-attendance classes.

### Photograph Attendance

1. Select an assigned class.
2. Start an attendance session.
3. Request camera permission.
4. Capture and preview the group photograph.
5. Upload it securely.
6. Run face detection and matching against enrolled students.
7. Display matches with confidence scores.
8. Require faculty review and correction.
9. Submit final attendance.
10. Update student records and notify students.

Low-confidence results must remain `pending_review`; recognition must never finalize attendance without faculty confirmation.

### Manual Attendance

Include student search, present/absent/late controls, bulk actions, correction reasons, confirmation, and audit logging.

### Declare Class Off

Faculty selects the class and period, enters a reason, and optionally marks whether a makeup class is required. The system saves the cancellation, updates the calendar, adjusts the timetable occurrence, and sends push notifications to affected students.

## 8. Notifications

Support notifications for:

- Class declared off.
- Attendance session completed.
- Attendance below threshold.
- Timetable changes.
- New announcements.
- Makeup class reminders.

Register device tokens, request notification permission, handle foreground notifications, support notification deep links, remove invalid tokens, and track read/unread state.

## 9. UI and Animation

Use NativeWind consistently and add Moti for:

- Dashboard entrance animations.
- Attendance percentage transitions.
- Calendar transitions.
- Camera processing states.
- Loading skeletons.
- Empty/error states.
- Notification list updates.
- Success and confirmation states.

Create reusable components for the app header, role-aware tab bar, attendance indicator, data table, timetable grid, calendar cell, status badge, loading state, empty state, confirmation modal, and error banner.

Define semantic colors for present, absent, late, holiday, and pending review in the existing theme system.

## 10. Delivery Phases

### Phase 1: Foundation

- Replace placeholder navigation.
- Add authentication and session provider.
- Add role-aware routing.
- Add shared UI components.
- Add loading, error, and empty states.

### Phase 2: Backend

- Create database schema.
- Configure authentication and row-level security.
- Add typed data access hooks.
- Seed demo users, classes, timetable, and calendar data.

### Phase 3: Student MVP

- Student dashboard.
- Attendance table and subject details.
- Academic calendar.
- Digital timetable.
- Profile and logout.

### Phase 4: Faculty MVP

- Faculty dashboard.
- Assigned class list.
- Manual attendance.
- Attendance history.
- Timetable and reports.

### Phase 5: Notifications

- Device token registration.
- Push notification service.
- Class-off workflow.
- Student notification center.
- Notification deep links.

### Phase 6: Photograph Attendance

- Camera capture.
- Secure upload.
- Face matching.
- Confidence-based review.
- Faculty correction workflow.
- Audit logs.

### Phase 7: Release Quality

- Offline/read-only timetable and calendar caching.
- Retry handling for attendance uploads.
- Accessibility review.
- Security and privacy review.
- Physical Android device testing.
- Notification testing.
- EAS development and production builds.

## 11. Testing Requirements

Test that:

- Students cannot access faculty routes.
- Faculty cannot edit unrelated classes.
- Attendance totals and percentages are correct.
- Duplicate attendance cannot be submitted.
- Manual corrections create audit records.
- Class-off notifications reach only affected students.
- Notification taps open the correct screen.
- Camera permission denial has a manual fallback.
- Low-confidence matches require review.
- Poor connectivity does not silently lose attendance.
- Timetables and calendars render correctly on different screen sizes.

## 12. Immediate Next Steps

1. Confirm Supabase as the backend.
2. Define attendance percentage and eligibility rules.
3. Decide whether face recognition is part of the first release.
4. Create authentication and role-aware route groups.
5. Build student and faculty dashboard shells.
6. Define the database schema and seed demo data.
7. Implement student attendance and timetable features.
8. Implement faculty manual attendance.
9. Add class cancellation and notifications.
10. Integrate photograph-based attendance after the manual workflow is stable.
