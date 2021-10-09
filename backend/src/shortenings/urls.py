from django.urls import path

from shortenings import views

app_name = 'shortenings'

urlpatterns = [
    path('<slug:slug>/', views.ShorteningRedirectView.as_view(),
         name='redirect'),
]
