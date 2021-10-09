from django.urls import path

from shortenings import views

urlpatterns = [
    path('<slug:slug>/', views.ShorteningRedirectView.as_view()),
]
