from django.http import Http404
from django.views.generic import RedirectView

from shortenings.models import Shortening


class ShorteningRedirectView(RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        try:
            shortening = Shortening.objects.get(slug=kwargs.get('slug'))
            return shortening.target_url
        except Shortening.DoesNotExist:
            raise Http404()
