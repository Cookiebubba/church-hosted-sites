"""Paint a full-bleed cream underlay beneath every page of the reformatted PDF
(Chromium cannot paint its page-margin areas, which left white bands)."""
import io
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

PDF = "/home/user/church-hosted-sites/assets/NPBC_Committee_Guidelines_Reformatted_2026-2027.pdf"

reader = PdfReader(PDF)
writer = PdfWriter()

buf = io.BytesIO()
w = float(reader.pages[0].mediabox.width)
h = float(reader.pages[0].mediabox.height)
c = canvas.Canvas(buf, pagesize=(w, h))
c.setFillColor(HexColor("#F6F4EF"))
c.rect(0, 0, w, h, stroke=0, fill=1)
c.showPage()
c.save()
buf.seek(0)
cream = PdfReader(buf)

for page in reader.pages:
    base = writer.add_blank_page(width=w, height=h)
    base.merge_page(cream.pages[0])
    base.merge_page(page)

with open(PDF, "wb") as f:
    writer.write(f)
print("underlay applied:", len(reader.pages), "pages")
