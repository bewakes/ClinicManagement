from django.conf.urls import patterns, include, url
from records import views
from records.views import *

urlpatterns = patterns('',
    # Examples:
     #url(r'^$', Index.as_view(), name='index'),
	 url(r'^reception/', Reception.as_view(), name='reception'),
	 url(r'^labtest/', LabTest.as_view(), name='labtest'),
     url(r'^lab/', Lab.as_view(), name='lab'),
     url(r'^processlabform/',processLabForm , name='process_lab_form'),
    # url(r'^blog/', include('blog.urls')),

)
