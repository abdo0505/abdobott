let handler = async (m, { conn, text, command }) => {
    if (command == 'focus1') {
        // تقسيم النص إلى الرقم وعدد المرات
        let [number, times] = text.trim().split(/\s+/);
        if (!number || !times) throw '*مثال* :\n*.focus* 1234567890 3';

        // التأكد من أن number هو رقم هاتف صحيح و times هو عدد صحيح
        if (!/^\d+$/.test(number)) throw '*خطأ* :\n*الرقم المدخل غير صحيح*';
        if (!/^\d+$/.test(times) || times <= 0) throw '*خطأ* :\n*العدد المدخل غير صحيح*';

        times = parseInt(times);

        // الرسالة التلقائية المحددة
        let message = '✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмRØ^^O̷';

        // إرسال الرسالة بعدد المرات المطلوبة
        for (let i = 0; i < times; i++) {
            await conn.sendMessage(number + '@s.whatsapp.net', { text: message });
        }

        // قم بحظر الرقم بعد إرسال الرسائل
        try {
            await conn.blockUser(number + '@s.whatsapp.net', 'عملية تركيز');
            m.reply(`تم إرسال الرسالة بنجاح ${times} مرة وتم حظر الرقم ${number}`);
        } catch (e) {
            m.reply(`تم إرسال الرسالة بنجاح ${times} مرة ولكن لم يتمكن من حظر الرقم ${number}`);
        }
    }
}

handler.command = handler.help = ['focus1'];
handler.tags = ['tools'];
export default handler;