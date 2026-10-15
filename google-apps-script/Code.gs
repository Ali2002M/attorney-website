/**
 * اسکریپت دریافت رزرو مشاوره و افزودن آن به تقویم گوگل دفتر
 *
 * راهنمای راه‌اندازی (یک‌بار، حدود ۱۰ دقیقه):
 *
 * 1) به https://script.google.com بروید و «New project» بسازید.
 * 2) محتوای این فایل را در ویرایشگر کپی کنید.
 * 3) در تنظیمات پروژه (Project Settings)، Timezone را روی «Tehran» بگذارید.
 * 4) اگر می‌خواهید رویدادها در تقویمی غیر از تقویم اصلی ثبت شوند، آیدی تقویم را
 *    در تنظیمات تقویم گوگل (Settings → Integrate calendar) پیدا و جایگزین کنید.
 * 5) Deploy → New deployment → نوع: «Web app»:
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    سپس دکمه Deploy را بزنید و آدرس Web app را کپی کنید.
 *    (نخستین بار از شما اجازه دسترسی به تقویم و ایمیل خواسته می‌شود؛ تأیید کنید.)
 * 6) آدرس کپی‌شده را در متغیر محیطی زیر فرانت‌اند قرار دهید:
 *      NEXT_PUBLIC_BOOKING_WEBHOOK_URL=https://script.google.com/macros/s/....../exec
 * 7) برای اعلان ایمیلی هر رزرو، ایمیل خود را در NOTIFY_EMAIL وارد کنید.
 */

// ⚙️ تنظیمات — این دو مقدار را ویرایش کنید
const CALENDAR_ID = "primary"; // "primary" = تقویم اصلی حساب گوگل شما
const NOTIFY_EMAIL = "your-email@gmail.com"; // ایمیل دریافت اطلاع‌رسانی رزرو

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const title = [
      "🗓 مشاوره",
      data.consultation_type_label || data.consultation_type || "",
      "—",
      data.legal_topic || "",
      "(" + (data.full_name || "") + ")",
    ]
      .filter(Boolean)
      .join(" ");

    const start = new Date(data.date + "T" + (data.time || "10:00") + ":00");
    const end = new Date(start.getTime() + 60 * 60 * 1000); // جلسه ۶۰ دقیقه

    const description = [
      "نام و نام خانوادگی: " + (data.full_name || "—"),
      "موبایل: " + (data.mobile_number || "—"),
      data.email ? "ایمیل: " + data.email : null,
      "نوع مشاوره: " + (data.consultation_type_label || data.consultation_type || "—"),
      "موضوع حقوقی: " + (data.legal_topic || "—"),
      "",
      "شرح پرونده:",
      data.message || "—",
    ]
      .filter(Boolean)
      .join("\n");

    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    calendar.createEvent(title, start, end, {
      description: description,
    });

    // اعلان ایمیلی به دفتر
    if (NOTIFY_EMAIL && NOTIFY_EMAIL !== "your-email@gmail.com") {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: "رزرو جدید مشاوره — " + (data.full_name || ""),
        body:
          "یک درخواست مشاوره جدید ثبت شد:\n\n" +
          description +
          "\n\nبرای مشاهده، تقویم گوگل خود را باز کنید.",
      });
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// برای تست سریع، این تابع را در ادیتور اجرا کنید (Run)
function testBooking() {
  doPost({
    postData: {
      contents: JSON.stringify({
        full_name: "تست سامانه",
        mobile_number: "09120000000",
        consultation_type_label: "تلفنی",
        legal_topic: "حقوق خانواده",
        message: "این یک رزرو آزمایشی است.",
        date: Utilities.formatDate(new Date(), "Asia/Tehran", "yyyy-MM-dd"),
        time: "17:00",
      }),
    },
  });
}
