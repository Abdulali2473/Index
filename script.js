// تعريف البيانات الخاصة بالجهات والموظفين
const departmentsData = {
    "عمادة الدراسات العليا": {
        "وحدة العميد": [
            {"المسمى الوظيفي": "عميد عمادة الدراسات العليا", "الاسم": "د.ســعــــــد محمـــــد الســـعـــــــــدي", "السيسكو": "32555", "البريد الإلكتروني": "gs@iau.edu.sa"},
            {"المسمى الوظيفي": "مدير مكتب العميد", "الاسم": "أ.صــالـــــــح علــــــــي الغــــامـــــــــدي", "السيسكو": "‎32562", "البريد الإلكتروني": "sasalghamdi@iau.edu.sa"},
            {"المسمى الوظيفي": "سكرتير مكتب العميد", "الاسم": "أ.باسـمـــة عبدالباري جمـل الليــــل", "السيسكو": "32563", "البريد الإلكتروني": "balleel@iau.edu.sa"}
        ]
    },
    "الشؤون الإدارية والمالية": {
        "وحدة الشؤون المالية": [
            {"المسمى الوظيفي": "مديرة الشؤون الإدارية والمالية بعمادة الدراسات العليا", "الاسم": "أ.مــرفــــــــت أحمـــــــد فــــلاتــــــــــــه", "السيسكو": "32587", "البريد الإلكتروني": "mafallatah@iau.edu.sa"},
            {"المسمى الوظيفي": "مدير الشؤون الإدارية والمالية", "الاسم": "أ/ ميرفت احمد بكر فلاته", "السيسكو": "N/A", "البريد الإلكتروني": "N/A"}
        ]
    },
    "الجودة": {
        "وحدة الجودة": [
            {"المسمى الوظيفي": "مستشار عمادة الدراسات العليا  والجودة ", "الاسم": "د.محـمد اســـــماعيل عبدالرحمــــن", "السيسكو": "32570", "البريد الإلكتروني": "miismail@iau.edu.sa"}
        ]
    },
    "وحدة الخريجين": {
        "وحدة الخريجين": [
            {"المسمى الوظيفي": "وحدة الخريجين ", "الاسم": "أ.أمــيــــن عبـدالله الغــــريـــافــــــي", "السيسكو": "‎32553", "البريد الإلكتروني": "aalgheryafi@iau.edu.sa"},
            {"المسمى الوظيفي": "وحدة الخريجين", "الاسم": "أ/ خــــــــــيرية محــــــمد غــــــــــرامه", "السيسكو": "32551", "البريد الإلكتروني": "kmgramh@iau.edu.sa"}
        ]
    },
    "وحدة القبول": {
        "وحدة القبول": [
            {"المسمى الوظيفي": "وحدة القبول", "الاسم": "أ.جــمعــــــة عـــيســــى العـــبيـــدان", "السيسكو": "32558-", "البريد الإلكتروني": "jealobidan@iau.edu.sa"},
            {"المسمى الوظيفي": "وحدة القبول ", "الاسم": "أ.ســـعـود معــروف المـــــالــكــــي ", "السيسكو": "‎32559", "البريد الإلكتروني": "smalmalki@iau.edu.sa"}
        ]
    }
    // أضف المزيد من الجهات والوحدات هنا حسب الحاجة
};

// دالة لتحميل الصفحة الرئيسية
function loadHomeContent() {
    document.getElementById('contentArea').style.display = 'block';
    document.getElementById('faqContent').style.display = 'none';
    document.getElementById('departmentsContent').style.display = 'none'; // افتراضياً مخفية، أضف هذا الـ div لاحقاً
}

// دالة لتحميل بيانات الجهات وعرض الوحدات فقط
function loadDepartmentsContent() {
    let contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // تفريغ المحتوى السابق

    for (let department in departmentsData) {
        let departmentCard = `
            <div class="card mb-3">
                <div class="card-header" onclick="loadUnitsContent('${department}')">${department}</div>
            </div>
        `;
        contentArea.innerHTML += departmentCard;
    }
    // إظهار محتوى الجهات وإخفاء باقي المحتويات
    document.getElementById('contentArea').style.display = 'block';
    document.getElementById('faqContent').style.display = 'none';
}

// دالة لتحميل بيانات الوحدات داخل الجهة
function loadUnitsContent(department) {
    let contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // تفريغ المحتوى السابق

    for (let unit in departmentsData[department]) {
        let unitCard = `
            <div class="card mb-3">
                <div class="card-header" onclick="loadEmployeesContent('${department}', '${unit}')">${unit}</div>
            </div>
        `;
        contentArea.innerHTML += unitCard;
    }
}

// دالة لتحميل بيانات الموظفين داخل الوحدة
function loadEmployeesContent(department, unit) {
    let contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = ''; // تفريغ المحتوى السابق

    departmentsData[department][unit].forEach(employee => {
        let employeeCard = `
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>المسمى الوظيفي:</strong> ${employee['المسمى الوظيفي']}</p>
                    <p><strong>الاسم:</strong> ${employee['الاسم']}</p>
                    <p><strong>السيسكو:</strong> ${employee['السيسكو']}</p>
                    <p><strong>البريد الإلكتروني:</strong> <a href="mailto:${employee['البريد الإلكتروني']}">${employee['البريد الإلكتروني']}</a></p>
                    <hr>
                </div>
            </div>
        `;
        contentArea.innerHTML += employeeCard;
    });
}

// دالة لتحميل الأسئلة الأكثر شيوعاً
function loadFaqContent() {
    document.getElementById('contentArea').style.display = 'none';
    document.getElementById('faqContent').style.display = 'block';
    document.getElementById('departmentsContent').style.display = 'none'; // افتراضياً مخفية، أضف هذا الـ div لاحقاً
}

// ربط الدوال بالنقر على الأيقونات
document.getElementById('homeOption').addEventListener('click', loadHomeContent);
document.getElementById('departmentsOption').addEventListener('click', loadDepartmentsContent);
document.getElementById('faqOption').addEventListener('click', loadFaqContent);

// إضافة تأثير hover على الأيقونات
document.querySelectorAll('.icon-option').forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', function() {
        item.style.transform = 'scale(1)';
    });
});
